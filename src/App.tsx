import axios from "axios"
import {useState} from 'react'
import './App.css';

type GitHubData = {
  name: string;
  bio: string;
  avatar_url: string;
}

function App() {
  const [username, SetUsername] = useState("")
  const [name, SetName] = useState("Loading...")
  const [bio, SetBio] = useState("Loading...")
  const [avatar_url, SetAvatarURL] = useState("Loading...")

  const handlePesquisa = () => {
    axios.get<GitHubData>(`https://api.github.com/users/${username}`).then((response) => {SetName(response.data.name)
    SetName(response.data.name)
    SetBio(response.data.bio)
    SetAvatarURL(response.data.avatar_url)
    
  })
  }

  return (
    <div className="container-geral">
      <div className="container">
        <header className="header-top"> GitHub
        <img className="imgt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png" alt="" />
        </header>

        <main>
          <div className="conteudo">
            <div>
              <img src={avatar_url} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="Digite o usuário" onChange={(e) => SetUsername(e.target.value)} />
            <button onClick={handlePesquisa}>Consultar</button>
          </div>
        </main>

      </div>
    </div>
  )
}

export default App
