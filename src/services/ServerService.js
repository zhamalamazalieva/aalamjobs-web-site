import Cookies from "js-cookie";

export default class ServerService {
  _baseApi = "http://165.227.143.167:9000"

  /**********************COUNTRIES************************/
  getCountries = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/countries/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  createCountry = async ({ name, country_code }) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/countries/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        country_code,
      }),
    });
  };
  updateCountry = async ({id, name}) => {
    return await this.doRequestAndParse(
      `${this._baseApi}/api/countries/${id}/`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + getAccessToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      }
    );
  };
  deleteCountry = async (id) => {
    const res = await fetch(`${this._baseApi}/api/countries/${id}/`, {
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
  };

   /**********************CURRENCIES************************/
   getCurrencies = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/currencies/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  createCurrency = async ({ name , sign}) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/currencies/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, sign
      }),
    });
  };
  updateCurrency = async ({id, name, sign}) => {
    return await this.doRequestAndParse(
      `${this._baseApi}/api/currencies/${id}/`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + getAccessToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, sign:sign}),
      }
    );
  };
  deleteCurrency = async (id) => {
    const res = await fetch(`${this._baseApi}/api/currencies/${id}/`, {
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
  };
  /***********************CITIES**************************/
  getCities = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/cities/`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };
  createCity = async (city) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/cities/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(city),
    });
  };
  updateCity = async ({id, name}) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/cities/${id}/`, {
      method: "PATCH",
      headers: { Authorization: "Bearer " + getAccessToken() },
      body: JSON.stringify({ name: name }),
    });
  };
  deleteCity = async (id) => {
    const res = await fetch(`${this._baseApi}/api/cities/${id}/`, {
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
  };

  /*********************ORGANIZATIONS**********************/
  getOrganizations = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/organizations/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  createOrganization = async (organization) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/organizations/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(organization),
    });
  };
  updateOrganization = async ({
    id,
    name,
    phone,
    address,
    country,
    sectors,
  }) => {
    return await this.doRequestAndParse(
      `${this._baseApi}/api/organizations/${id}/`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + getAccessToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, phone, sectors, country }),
      }
    );
  };





 



  


  /**********************VACANCIES************************/
  getVacancies = async () => {
    let url = `${this._baseApi}/api/jobs/all/`;
    return await this.doRequestAndParse(url, {
      method: "GET",
    });
  };
  createVacancy = async (job) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/post/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };
  updateVacancy = async (id, vacancy) => {
    delete vacancy.extra_benefits;
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/${id}/`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vacancy),
    });
  };

  deleteVacancy = async (id) => {
    const res = await fetch(`${this._baseApi}/api/jobs/${id}/`, {
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
  };
  getVacancyDetail = async (id) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/jobs/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
    });
  };
  /**************************SECTORS***************************/
  getSectors = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/sectors/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  /******************APPLICATIONS*************************/
  getApplications = async (page, searchInput) => {
    return await this.doRequestAndParse(
      `${this._baseApi}/api/resumes/?page=${page}&search=${searchInput}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getAccessToken(),
        },
      }
    );
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
  getApplicationDetail = async (id) => {
    return await this.doRequestAndParse(`${this._baseApi}/api/resumes/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
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
  deleteUser = async (id) => {
    const res = await fetch(`${this._baseApi}/auth/users/${id}/`, {
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
  };

  /********************CLIENTS******************************/
  getClients = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/api/users/clients/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  // createUser =  async ({ username, email, password, first_name, last_name, role}) => {
  //   return await this.doRequestAndParse(`${this._baseApi}/auth/users/`,{
  //     method:"POST",
  //     headers:
  //     { Authorization: "Bearer " + getAccessToken(),
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       first_name,
  //       last_name,
  //       role
  //     })
  //   })
  // }
  deleteClient = async (id) => {
    const res = await fetch(`${this._baseApi}/api/clients/${id}/`, {
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
  };

  /********************USERPROFILE******************************/
  getUser = async () => {
    return await this.doRequestAndParse(`${this._baseApi}/auth/users/me/`, {
      method: "GET",
      headers: { Authorization: "Bearer " + getAccessToken() },
    });
  };
  updateUser = async (user) => {
    return await this.doRequestAndParse(`${this._baseApi}/auth/users/me/`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
      console.log(hasError);
      return { hasError };
    } catch (err) {
      return { hasError: true };
    }
  };

  /***********************RESETPASSWORD*******************/
  resetPassword = async (email) => {
    try {
      let hasError = false;
      const res = await fetch(`${this._baseApi}/auth/users/reset_password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log("e:", email);

      if (res.status !== 204) {
        hasError = true;
      }
      console.log(hasError);
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
      console.log("hE in Server:", hasError);
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
