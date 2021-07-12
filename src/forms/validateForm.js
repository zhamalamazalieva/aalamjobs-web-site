export default function validate(values) {
  let errors = {};

  if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.sector) {
      errors.sector = 'Обязательное поле';
    }
    if (!values.specialization) {
      errors.specialization = 'Обязательное поле';
    }
    if (!values.paymentTypeEn || !values.paymentTypeRu || !values.paymentTypeKg) {
      errors.paymentTypeEn = 'Обязательное поле';
      errors.paymentTypeRu = 'Обязательное поле';
      errors.paymentTypeKg = 'Обязательное поле';
    }
    if (!values.countryKg || !values.countryRu) {
      errors.countryRu = 'Обязательное поле';
      errors.countryKg = 'Обязательное поле';
    }
    if(!values.resp){
      errors.resp = 'Обязательное поле';
    }
    if (!values.title) {
      errors.title = 'Обязательное поле';
    }
    if(!values.min){
      errors.min = 'Обязательное поле'
    }
    if(!values.max){
      errors.max = 'Обязательное поле'
    }
    if(!values.resTags){
      errors.resTags = 'Обязательное поле'
    }
    if(!values.reqTags){
      errors.reqTags = 'Обязательное поле'
    }
    if(!values.name){
      errors.name = 'Обязательное поле'
    }
    if(!values.address){
      errors.address = 'Обязательное поле'
    }
    if(!values.phone){
      errors.phone = 'Обязательное поле'
    }
    if(!values.country){
      errors.country = 'Обязательное поле'
    }
    if(!values.sectorArray){
      errors.sectorArray = 'Обязательное поле'
    }
    if(!values.newPassword){
      errors.newPassword = 'Обязательное поле'
    }
    if(!values.currentPassword){
      errors.currentPassword = 'Обязательное поле'
    }
    if(!values.confirmPassword){
      errors.confirmPassword = 'Обязательное поле'
    }
    if(!values.username){
      errors.username = 'Обязательное поле'
    }
    if(!values.password){
      errors.password = 'Обязательное поле'
    }
    if(!values.firstName){
      errors.firstName = 'Обязательное поле'
    }
    if(!values.lastName){
      errors.lastName = 'Обязательное поле'
    }
    if(!values.citizenship){
      errors.citizenship = 'Обязательное поле'
    }
    if(!values.maritalStatus){
      errors.maritalStatus = 'Обязательное поле'
    }
    if(!values.phone){
      errors.phone = 'Обязательное поле'
    }
    if(!values.city){
      errors.city = 'Обязательное поле'
    }
    if(!values.livingAddress){
      errors.livingAddress = 'Обязательное поле'
    }
    if(!values.position){
      errors.position = 'Обязательное поле'
    }
    if(!values.motherLanguage){
      errors.motherLanguage = 'Обязательное поле'
    }
    if(!values.skillsTags){
      errors.skillsTags = 'Обязательное поле'
    }
    if(!values.achievementsTags){
      errors.achievementsTags = 'Обязательное поле'
    }
    if(!values.dateCanStart){
      errors.dateCanStart = 'Обязательное поле'
    }
    if(!values.birthDate){
      errors.birthDate = 'Обязательное поле'
    }
    if(!values.selectedEmploymentType){
      errors.selectedEmploymentType = 'Обязательное поле'
    }

    return errors;
};