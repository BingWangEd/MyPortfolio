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

export const selectCompany = (selectedCompanyId) => {
  return {
    type: 'SELECT_COMPANY',
    selectedCompanyId
  }
}

export const selectExperienceCategory = (selectedExperienceCategory, newExperiences) => {
  return {
    type: 'SELECT_EXPERIENCE_CATEGORY',
    selectedExperienceCategory,
    newExperiences
  }
}

export const unselectExperienceCategory = (unselectedExperienceCategory) => {
  return {
    type: 'UNSELECT_EXPERIENCE_CATEGORY',
    unselectedExperienceCategory
  }
}

export const selectAllExperienceCategories = (experienceCategories) => {
  return {
    type: 'SELECT_ALL_EXPERIENCE_CATEGORIES',
    experienceCategories
  }
}

export const unselectAllExperienceCategories = () => {
  return {
    type: 'UNSELECT_ALL_EXPERIENCE_CATEGORIES'
  }
}

export const selectFunMode = () => {
  return {
    type: 'SELECT_FUN_MODE',
    ifSelectFunMode: true
  }
}

export const unselectFunMode = () => {
  return {
    type: 'UNSELECT_FUN_MODE',
    ifSelectFunMode: false
  }
}