import "./App.css";
import DownloadButton from "./components/DownloadButton";


import { MainRoutes } from "./routes/routes";

function App() {
  return (
    <>
      {/* <Box sx={{marginTop:1, marginBottom:2}}>
      <DownloadButton></DownloadButton>
     </Box> */}

      <DownloadButton></DownloadButton>

      <MainRoutes></MainRoutes>
    </>
  );
}

export default App;
