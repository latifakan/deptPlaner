import Headline from "./Headline.jsx";
import Settings from './Settings.jsx'
import Avatar from "./Avatar.jsx";
import './Nav.css'

export default function Nav() {
  return (
    <div class="flex justify-between p-1.5">
      <Avatar/>
      <Headline/>
      <Settings/>
    </div>
  )
}