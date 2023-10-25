import React, { useState, useEffect } from 'react';

function Block() {
    const initialLeftPositions = [0, 20]; // Positions horizontales initiales des div
    const initialRightPositions = [0, 20, 40]; // Positions horizontales initiales des div
    const initialTopPositions = [0, 20, 40]; // Positions horizontales initiales des div
    const initialBottomPositions = [0, 20, 40]; // Positions horizontales initiales des div

    const [leftPositions, setLeftPositions] = useState(initialLeftPositions);
    const [rightPositions, setRightPositions] = useState(initialRightPositions);
    const [topPositions, setTopPositions] = useState(initialTopPositions);
    const [bottomPositions, setBottomPositions] = useState(initialBottomPositions);

    const [direction, setDirection] = useState("right");
    // leftPositions.forEach(index => {
    //     if(index < 482){
    //     } else {
    //         // alert("game over")
    //     }
    // })


    useEffect(() => {
        if(direction === 'right'){
        const interval = setInterval(() => {
        setLeftPositions(prevPositions => {
            return prevPositions.map(left => left + 10); // Ajustez la valeur pour déplacer les div dans la direction souhaitée
        });
        }, 100); // Mettez à jour toutes les 100 millisecondes (ajustez selon vos besoins)

        return () => {clearInterval(interval);};
        }
    }, [direction]); // Laissez les dépendances vides pour exécuter cet effet une seule fois
    
    useEffect(() => {
        if(direction === 'left'){
        const interval = setInterval(() => {
        setRightPositions(prevPositions => {
            return prevPositions.map(right => right + 10); // Ajustez la valeur pour déplacer les div dans la direction souhaitée
        });
        }, 100); // Mettez à jour toutes les 100 millisecondes (ajustez selon vos besoins)

        return () => {clearInterval(interval);};
        }
    }, [direction]); // Laissez les dépendances vides pour exécuter cet effet une seule fois



    useEffect(() => {
        if(direction === 'bottom'){
        const interval = setInterval(() => {
        setTopPositions(prevPositions => {
            return prevPositions.map(top => top + 10); // Ajustez la valeur pour déplacer les div dans la direction souhaitée
        });
        }, 100); // Mettez à jour toutes les 100 millisecondes (ajustez selon vos besoins)

        return () => {clearInterval(interval);};
    }
    }, [direction]); // Laissez les dépendances vides pour exécuter cet effet une seule fois

    useEffect(() => {
        if(direction === 'top'){
        const interval = setInterval(() => {
        setBottomPositions(prevPositions => {
            return prevPositions.map(bottom => bottom + 10); // Ajustez la valeur pour déplacer les div dans la direction souhaitée
        });
        }, 100); // Mettez à jour toutes les 100 millisecondes (ajustez selon vos besoins)

        return () => {clearInterval(interval);};
        }
    }, [direction]); // Laissez les dépendances vides pour exécuter cet effet une seule fois

    
    const divStyles = leftPositions.map((left, index) => ({
        position: 'absolute',
        left: `${left}px`,
        // top: `${top}px`,
        // right : `${right}px`,
        // bottom : `${bottom}px`,
        width: '20px',
        height: '20px',
        background: 'red',
    }));

    function handleKeyPress(event) {
        if (event.key === 'ArrowLeft') {
            setDirection('top');
            console.log(direction)
            console.log(divStyles)
          // La touche "Left" a été pressée
          console.log('Touche "Left" pressée');
          // Ajoutez ici le code que vous souhaitez exécuter pour la touche "Left"
        } else if (event.key === 'ArrowRight') {
          // La touche "Right" a été pressée
          console.log('Touche "Right" pressée');
          // Ajoutez ici le code que vous souhaitez exécuter pour la touche "Right"
        }
      }
      
      // Ajoutez un gestionnaire d'événements pour écouter les pressions de touche
      window.addEventListener('keydown', handleKeyPress);

    return (
        <div>
        {leftPositions.map((_, index) => (
            <div key={index} style={divStyles[index]}></div>
        ))}
        </div>
    );
}

export default Block;

