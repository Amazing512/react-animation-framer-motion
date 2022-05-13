import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

function App() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(1);
  return (
    <motion.div
      className='App'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className='App-header'>
        <motion.div
          whileTap={{ scale: 0.9 }}
          drag='x'
          dragConstraints={{ left: -200, right: 200 }}
          style={{ x, opacity }}
        >
          <img src={logo} className='App-logo' alt='logo' />
        </motion.div>
        <motion.p
          animate={{ x: value + "px", opacity: toggle }}
          drag='x'
          onDrag={(event, info) => {
            setValue(x.get());
          }}
          dragConstraints={{ left: -100, right: 100 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </motion.p>

        <input
          type='range'
          name='range'
          min='-100'
          max='100'
          onChange={(e) => setValue(parseInt(e.target.value))}
        />

        <motion.button
          className='toggle-button'
          onClick={() => setToggle(toggle == 0 ? 1 : 0)}
        >
          Toggle Fade
        </motion.button>
      </header>
    </motion.div>
  );
}

export default App;
