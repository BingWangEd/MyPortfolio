export const updateCompany = (company) => {
  return {
    type: 'UPDATE_COMPANY',
    company
  }
}

export const updateCompanyName = (name) => {
  return {
    type: 'UPDATE_COMPANY_NAME',
    name
  }
}

export const updateCompanyCity = (city) => {
  return {
    type: 'UPDATE_COMPANY_CITY',
    city
  }
}