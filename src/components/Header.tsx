import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 20px',
                borderBottom: '1px solid #eee',
            }}
        >
            <h3>My Admin Panel</h3>

            <Button danger onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Header