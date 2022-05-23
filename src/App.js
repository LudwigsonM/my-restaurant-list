import { useState, createContext } from 'react';
import { Layout } from 'antd';
import MenuBar from './components/MenuBar';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const { Header, Content } = Layout;

export const UserContext = createContext(null);


function App() {
  const [user,setUser] = useState();
  return (
    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }} >
      <Layout className='layout'>
        <Header>
          <MenuBar />
        </Header>
        <Content> 
          <Routes>
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
            <Route path='/random' element={<h1>Random</h1>} />
            <Route path='/add' element={
              !user 
              ? <Login /> 
              :<h1>Add Restaurant</h1>} />
            <Route path='/' element={<RestaurantList />} />
          </Routes>
      </Content>
    </Layout>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
