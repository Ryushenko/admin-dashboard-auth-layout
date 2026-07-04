
export const useAuth = () => {
   const isAuth = localStorage.getItem('isAuth') === 'true';

    const login = () => localStorage.setItem('isAuth', 'true');
       

    const logout = () => localStorage.removeItem('isAuth');

    return { isAuth, login, logout };
}