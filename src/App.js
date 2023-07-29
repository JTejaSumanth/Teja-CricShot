import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./_app.scss";
import Login from "./components/Login";
import Header from "./components/headerbar/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import VideoPage from "./screens/videopage/VideoPage";
import VideoPage1 from "./screens/videopage/VideoPage1";
import VideoPage2 from "./screens/videopage/VideoPage2";
import VideoPage3 from "./screens/videopage/VideoPage3";
import Unorthodox from "./screens/unorthodox/Unorthodox";
import Unorthodox1 from "./screens/unorthodox/Unorthodox1";
import Unorthodox2 from "./screens/unorthodox/Unorthodox2";
import Unorthodox3 from "./screens/unorthodox/Unorthodox3";
import Unorthodox4 from "./screens/unorthodox/Unorthodox4";
import Wk from "./screens/wk/Wk";
import Wk1 from "./screens/wk/Wk1";
import Wk2 from "./screens/wk/Wk2";
import Fielding from "./screens/fielding/Fielding";
import Fielding1 from "./screens/fielding/Fielding1";
import Fielding2 from "./screens/fielding/Fielding2";
import Leg from "./screens/legspin/Leg";
import Leg1 from "./screens/legspin/Leg1";
import Leg2 from "./screens/legspin/Leg2";
import Leg3 from "./screens/legspin/Leg3";
import Leg4 from "./screens/legspin/Leg4";
import Leg5 from "./screens/legspin/Leg5";
import Off from "./screens/offspin/Off";
import Off1 from "./screens/offspin/Off1";
import Off2 from "./screens/offspin/Off2";
import Off3 from "./screens/offspin/Off3";
import Off4 from "./screens/offspin/Off4";
import Off5 from "./screens/offspin/Off5";
import Fast from "./screens/fast/Fast";
import Fast1 from "./screens/fast/Fast1";
import Fast2 from "./screens/fast/Fast2";
import Fast3 from "./screens/fast/Fast3";
import Fast4 from "./screens/fast/Fast4";
import Fast5 from "./screens/fast/Fast5";
import Fast6 from "./screens/fast/Fast6";
import Fast7 from "./screens/fast/Fast7";
import Fast8 from "./screens/fast/Fast8";
import Fast9 from "./screens/fast/Fast9";
import Orthodox from "./screens/orthodox/Orthodox";
import Orthodox1 from "./screens/orthodox/Orthodox1";
import Orthodox2 from "./screens/orthodox/Orthodox2";
import Orthodox3 from "./screens/orthodox/Orthodox3";
import Orthodox4 from "./screens/orthodox/Orthodox4";
import Orthodox5 from "./screens/orthodox/Orthodox5";
import Orthodox6 from "./screens/orthodox/Orthodox6";
import Orthodox7 from "./screens/orthodox/Orthodox7";
import Orthodox8 from "./screens/orthodox/Orthodox8";
import Orthodox9 from "./screens/orthodox/Orthodox9";
import Orthodox10 from "./screens/orthodox/Orthodox10";
import Orthodox11 from "./screens/orthodox/Orthodox11";
import Orthodox12 from "./screens/orthodox/Orthodox12";
import Orthodox13 from "./screens/orthodox/Orthodox13";
import Orthodox14 from "./screens/orthodox/Orthodox14";
import Orthodox15 from "./screens/orthodox/Orthodox15";

const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <>
      <Header handleToggleSidebar = {handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar = {sidebar} handleToggleSidebar = {handleToggleSidebar} />
        <Container  className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
}

const App = () => {  
  const { accessToken, loading } = useSelector(state => state.auth)
  const history = useHistory()
  const [defaultKeyword, setDefaultKeyword] = useState(() => { return localStorage.getItem("defaultKeyword") || "default"; });
  useEffect(() => {
      if (!loading && !accessToken) {
         history.push('/auth')
      }
  }, [accessToken, loading, history])
  useEffect(() => {
    localStorage.setItem("defaultKeyword", defaultKeyword);
  }, [defaultKeyword]);
  
  return (
    <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen defaultKeyword={defaultKeyword} setDefaultKeyword={setDefaultKeyword}/>
        </Layout>
      </Route>
      <Route path='/auth'>
        <Login />
      </Route>
      <Route path='/video/all/0'>
        <Layout>
          <VideoPage />
        </Layout>
      </Route>
      <Route path='/video/all/1'>
        <Layout>
          <VideoPage1 />
        </Layout>
      </Route>
      <Route path='/video/all/2'>
        <Layout>
          <VideoPage2 />
        </Layout>
      </Route>
      <Route path='/video/all/3'>
        <Layout>
          <VideoPage3 />
        </Layout>
      </Route>
      <Route path='/video/unorthodox/0'>
        <Layout>
          <Unorthodox />
        </Layout>
      </Route>
      <Route path='/video/unorthodox/1'>
        <Layout>
          <Unorthodox1 />
        </Layout>
      </Route>
      <Route path='/video/unorthodox/2'>
        <Layout>
          <Unorthodox2 />
        </Layout>
      </Route>
      <Route path='/video/unorthodox/3'>
        <Layout>
          <Unorthodox3 />
        </Layout>
      </Route>
      <Route path='/video/unorthodox/4'>
        <Layout>
          <Unorthodox4 />
        </Layout>
      </Route>
      <Route path='/video/wk/0'>
        <Layout>
          <Wk />
        </Layout>
      </Route>
      <Route path='/video/wk/1'>
        <Layout>
          <Wk1 />
        </Layout>
      </Route>
      <Route path='/video/wk/2'>
        <Layout>
          <Wk2 />
        </Layout>
      </Route>
      <Route path='/video/fielding/0'>
        <Layout>
          <Fielding />
        </Layout>
      </Route>
      <Route path='/video/fielding/1'>
        <Layout>
          <Fielding1 />
        </Layout>
      </Route>
      <Route path='/video/fielding/2'>
        <Layout>
          <Fielding2 />
        </Layout>
      </Route>
      <Route path='/video/legspin/0'>
        <Layout>
          <Leg />
        </Layout>
      </Route>
      <Route path='/video/legspin/1'>
        <Layout>
          <Leg1 />
        </Layout>
      </Route>
      <Route path='/video/legspin/2'>
        <Layout>
          <Leg2 />
        </Layout>
      </Route>
      <Route path='/video/legspin/3'>
        <Layout>
          <Leg3 />
        </Layout>
      </Route>
      <Route path='/video/legspin/4'>
        <Layout>
          <Leg4 />
        </Layout>
      </Route>
      <Route path='/video/legspin/5'>
        <Layout>
          <Leg5 />
        </Layout>
      </Route>
      <Route path='/video/offspin/0'>
        <Layout>
          <Off />
        </Layout>
      </Route>
      <Route path='/video/offspin/1'>
        <Layout>
          <Off1 />
        </Layout>
      </Route>
      <Route path='/video/offspin/2'>
        <Layout>
          <Off2 />
        </Layout>
      </Route>
      <Route path='/video/offspin/3'>
        <Layout>
          <Off3 />
        </Layout>
      </Route>
      <Route path='/video/offspin/4'>
        <Layout>
          <Off4 />
        </Layout>
      </Route>
      <Route path='/video/offspin/5'>
        <Layout>
          <Off5 />
        </Layout>
      </Route>
      <Route path='/video/fast/0'>
        <Layout>
          <Fast />
        </Layout>
      </Route>
      <Route path='/video/fast/1'>
        <Layout>
          <Fast1 />
        </Layout>
      </Route>
      <Route path='/video/fast/2'>
        <Layout>
          <Fast2 />
        </Layout>
      </Route>
      <Route path='/video/fast/3'>
        <Layout>
          <Fast3 />
        </Layout>
      </Route>
      <Route path='/video/fast/4'>
        <Layout>
          <Fast4 />
        </Layout>
      </Route>
      <Route path='/video/fast/5'>
        <Layout>
          <Fast5 />
        </Layout>
      </Route>
      <Route path='/video/fast/6'>
        <Layout>
          <Fast6 />
        </Layout>
      </Route>
      <Route path='/video/fast/7'>
        <Layout>
          <Fast7 />
        </Layout>
      </Route>
      <Route path='/video/fast/8'>
        <Layout>
          <Fast8 />
        </Layout>
      </Route>
      <Route path='/video/fast/9'>
        <Layout>
          <Fast9 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/0'>
        <Layout>
          <Orthodox />
        </Layout>
      </Route>
      <Route path='/video/orthodox/1'>
        <Layout>
          <Orthodox1 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/2'>
        <Layout>
          <Orthodox2 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/3'>
        <Layout>
          <Orthodox3 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/4'>
        <Layout>
          <Orthodox4 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/5'>
        <Layout>
          <Orthodox5 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/6'>
        <Layout>
          <Orthodox6 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/7'>
        <Layout>
          <Orthodox7 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/8'>
        <Layout>
          <Orthodox8 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/9'>
        <Layout>
          <Orthodox9 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/10'>
        <Layout>
          <Orthodox10 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/11'>
        <Layout>
          <Orthodox11 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/12'>
        <Layout>
          <Orthodox12 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/13'>
        <Layout>
          <Orthodox13 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/14'>
        <Layout>
          <Orthodox14 />
        </Layout>
      </Route>
      <Route path='/video/orthodox/15'>
        <Layout>
          <Orthodox15 />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>         
  );
}

export default App;