import './App.css'
import Card from './Card.jsx'
import Nav from './Nav.jsx'

function App() {
  return (
    <div>
      <nav class="bg-amber w-screen top-2">
        <Nav/>
      </nav>
      <section>
        <Card headline="Übernehme die Kontrolle über deine Schulden" text="Du möchtest endlich die Kontrolle über deine Schulden haben? Lass mir die helfen wie du es schaffst deine Schulden bestmöglich abzuzahlen"/>
        <Card headline="Du bist überfordert?" text="Viele sind überfordert und wissen nicht wie sie die Schulden abzahlen sollen"/>
        <Card headline="Der richtige Umgang mit Schulden" text="Du hast nicht gelernt wie du mit Schulden umgehen sollst? Keine Sorge ich helfe dir dabei"/>
        <Card headline="Verschaffe dir eine Übersicht" text="Du bist überfordert und hast keine Übersicht mehr über die Schulden? Lass uns zusammen ein Plan erstellen, so dass du schnell und geplant die Schulden los wirst"/>
      </section>
    </div>
  )
}

export default App
