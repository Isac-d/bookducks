
export const isUserSignedIn = () => {
  const token = localStorage.getItem('token');

  if (!token || token === 'undefined' || token === 'null' || token.trim() === '') {
    return false;
  }

  try {
    const decoded = jwt_decode(token);

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      console.warn('Token expired');
      localStorage.removeItem('token');
      return false;
    }

    return true;
  } catch (e) {
    console.error('Invalid token format', e);
    return false;
  }
};
