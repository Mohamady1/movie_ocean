export const fetchData = () => async (dispatch) => {
  const req = await fetch(
    "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
  );
  const res = await req.json();
  dispatch({
    type: "FETCH_DATA",
    payload: res,
  });
};
