import Cookies from "js-cookie";

export default class ServerService {
  
  _baseApi = "http://165.22.88.94:9000"

  /**********************COUNTRIES************************/
  getCountries = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/countries/`, {
      method: "GET",

    });
  };

   /**********************CURRENCIES************************/
   getCurrencies = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/currencies/`, {
      method: "GET",

    });
  };
 
  /******************EMLOYMENT_TYPES**********************/
  getEmploymentTypes = async () => {
    return await this.doRequestAndParse(
      `${this._baseApi}/api/types/employment/`,
      {
        method: "GET",
      }
    );
  };

  /***********************CITIES**************************/
  getCities = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/cities/`, {
      method: "GET",

    });
  };

  /*********************ORGANIZATIONS**********************/
  getOrganizations = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/organizations/`, {
      method: "GET",

    });
  };

  /**************************SECTORS***************************/
    getSectors = async () => {
      return await this.doRequestAndParse(`${this._baseApi}/api/sectors/`, {
        method: "GET",
      });
    };

  /**********************FAVOURITES************************/

  getFavourites = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/favorites/all/`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
     },

    });
  };
  createFavourites = async (job) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/favorites/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };

  deleteFavourites = async (job) => {
    const res = await fetch(`${this._baseApi}/api/jobs/favorites/${job}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });

    if (!res.ok) {
      return {
        hasError: true,
        data: { detail: "Ошибка при удалении" },
      };
    } else {
      return {
        hasError: false,
        data: { detail: "Успешно удалено" },
      };
    }
  }

  /**********************VACANCIES************************/
  getVacancies = async (page, city, country, sector, employmentType, filterBySalary) => { 
    const tkn = getAccessToken()
    let headers = {}
    if(tkn){
     headers = {
        Authorization: "Bearer " + tkn
      }
    }
    let url = `${this._baseApi}/api/jobs/all/?page=${page}`;

    if(city){
      url = url + `&city=[${city}]` || "";
    }
    if(country){
      url = url + `&country=[${country}]` || "";
    }
    if(sector){
      url = url + `&sector=[${sector}]` || "";
    }
    if(employmentType){
      url = url + `&employment=[${employmentType}]` || "";
    }
    if (Object.keys(filterBySalary).length !== 0 && filterBySalary.currency) {
      url = url + `&salary=${JSON.stringify(filterBySalary)}`;
    }
    return await this.doRequestAndParse(url, {
      method: "GET",
      headers: headers
    });
  };

  getVacancyDetail = async (id) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
    });
  };


  


  createApplication = async (cv) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/resumes/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cv),
    });
  };

  /********************USERS******************************/
  getUsers = async (role) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/users/${role}/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  createUser = async ({
    username,
    email,
    password,
    first_name,
    last_name,
    role,
  }) => {
    return await this.doRequestAndParse(`${this._baseApi}/auth/users/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
        role,
      }),
    });
  };

 
  /********************USERPROFILE******************************/
  getUser = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/auth/users/me/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  updateUser = async (user) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/auth/users/me/`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
      body:user,
    });
  };
  updateUserPhoto = async (photo) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/auth/users/me/`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
      body:photo
    });
  };

  setPassword = async (password) => {
    try {
      let hasError = false;
      const res = await fetch(`${this._baseApi}/auth/users/set_password/`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + getAccessToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      });
      if (res.status !== 204) {
        hasError = true;
      }
      return { hasError };
    } catch (err) {
      return { hasError: true };
    }
  };

  /***********************RESETPASSWORD*******************/
  resetPassword = async (email) => {
    try {
      let hasError = false;
      const res = await fetch(`${this._baseApi}/api/auth/users/reset_password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      if (res.status !== 204) {
        hasError = true;
      }
      return { hasError };
    } catch (err) {
      return { hasError: true };
    }
  };

  /***********************REQUEST*************************/

  doRequestAndParse = async (url, options) => {
    try {
      let hasError = false;
      const res = await fetch(url, options);
      if (!res.ok) {
        hasError = true;
      }
      const data = await res.json();
      return { hasError, data };
    } catch (err) {
      return { hasError: true, data: { detail: err.message.toString() } };
    }
  };
}
const getAccessToken = () => {
  const token = Cookies.get("access_token_aalam");
  return token;
};
