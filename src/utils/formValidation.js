const validateSignUpForm = (name, email, phone, position, photo) => {
  const inputErrorObj = {
    name: "",
    message: "",
  };

  if (
    !name ||
    name === "" ||
    name.trim() === "" ||
    name.length < 2 ||
    name.length > 60
  ) {
    inputErrorObj.name = "name";
    inputErrorObj.message = "Please, provide your name (2-60 characters)";
  }

  if (
    !email ||
    email === "" ||
    email.trim() === "" ||
    // eslint-disable-next-line no-useless-escape
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    inputErrorObj.name = "email";
    inputErrorObj.message = "Please, provide your correct email'";
  }

  if (
    !phone ||
    phone === "" ||
    phone.trim() === "" ||
    // eslint-disable-next-line no-useless-escape
    !/^[\+]{0,1}380([0-9]{9})$/.test(phone)
  ) {
    inputErrorObj.name = "phone";
    inputErrorObj.message =
      "Please, enter your phone number similar to this: +38 (XXX) XXX - XX - XX";
  }

  if (!position || position < 1) {
    inputErrorObj.name = "position";
    inputErrorObj.message = "Please, choose the position";
  }

  // photo validation
  if (!photo) {
    inputErrorObj.name = "photo";
    inputErrorObj.message = "Please, provide your photo";
  }

  if (!photo.type.match("image.*")) {
    inputErrorObj.name = "photo";
    inputErrorObj.message = "Please, provide an image";
  }

  if (photo.size > 5000000) {
    inputErrorObj.name = "photo";
    inputErrorObj.message = "Your photo size must not be greater than 5 Mb";
  }

  let img = new Image();
  let width;
  let height;

  img.src = URL.createObjectURL(photo);
  img.onload = function () {
    width = this.naturalWidth;
    height = this.naturalHeight;
  };

  if (width < 70 || height < 70) {
    inputErrorObj.name = "photo";
    inputErrorObj.message = "Minimum size of photo must be 70x70px";
  }

  return inputErrorObj;
};

export default validateSignUpForm;
