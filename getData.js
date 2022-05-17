const paramCheck = (data, key) => {
  if (key in data) return data[key];
  return null;
};

exports.getUsername = (props) => {
  return paramCheck(props, "ext_user_username");
};

exports.getPerson = (props) => {
  return paramCheck(props, "lis_person_name_full");
};

exports.getUserId = (props) => {
  return paramCheck(props, "user_id");
};

exports.getCourseTitle = (props) => {
  return paramCheck(props, "context_title");
};

exports.getRoles = (props) => {
  return paramCheck(props, "roles");
};

exports.getContextLabel = (props) => {
  return paramCheck(props, "context_label");
};
