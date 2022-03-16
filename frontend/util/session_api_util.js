// POST user
// argument syntax: signup({username: "test23", email:"test23@test.com", password: "123123"});
export const signup = (user) => {
  return $.ajax({
    url: `/api/users`,
    method: "POST",
    data: { user },
  });
};

// POST session 
export const login = (user) => {
  return $.ajax({
    url: `/api/session`,
    method: "POST",
    data: { user },
  });
};

// DELETE session
export const logout = () => {
  return $.ajax({
    url: `/api/session`,
    method: "DELETE",
  });
};
