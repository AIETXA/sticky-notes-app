import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";



function ColorSelector() {
  const { color, setColor } = useContext(ColorContext);

  return (
    <div>
      <label>Color por defecto: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
export default ColorSelector