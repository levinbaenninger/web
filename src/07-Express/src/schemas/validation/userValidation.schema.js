export const userCreateSchema = {
  firstName: {
    notEmpty: {
      errorMessage: "First name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'First name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'First name must be a string'
    },
    trim: true,
    escape: true
  },
  lastName: {
    notEmpty: {
      errorMessage: "Last name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'Last name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'Last name must be a string'
    },
    trim: true,
    escape: true
  }
};

export const userUpdateSchema = {
  firstName: {
    notEmpty: {
      errorMessage: "First name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'First name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'First name must be a string'
    },
    trim: true,
    escape: true
  },
  lastName: {
    notEmpty: {
      errorMessage: "Last name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'Last name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'Last name must be a string'
    },
    trim: true,
    escape: true
  }
};

export const userPatchSchema = {
  firstName: {
    optional: true,
    notEmpty: {
      errorMessage: "First name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'First name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'First name must be a string'
    },
    trim: true,
    escape: true
  },
  lastName: {
    optional: true,
    notEmpty: {
      errorMessage: "Last name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'Last name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'Last name must be a string'
    },
    trim: true,
    escape: true
  }
};
