function RandomBackgroundButton() {

const getRandomColor = () => {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++); {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}


function changeBackgroundColor() {
   document.getElementsByClassName().style.backgroundColor = getRandomColor();
}

   return (
    <button onClick={changeBackgroundColor}>色変更</button>
   )
}

export default RandomBackgroundButton;