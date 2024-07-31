export const handleSquareActions = (currentSquare, setTotal, setColorText, setBgColor ,setIsInvestmentModalOpen, setInvestmentMessage, setAdditionalInfo) => {
    switch (currentSquare.image) {
      case 'cf.png':
        setInvestmentMessage('¿Deseas invertir en Capital Fund?');
        setAdditionalInfo('Gana un 5% adicional sobre tu total actual.');
        setColorText('white');
        setBgColor('#0e1b4d');
        setIsInvestmentModalOpen(true);
        break;
      case 'tax.png':
      case 'luxur.webp':
        setTotal((prevTotal) => prevTotal - 100);
        break;
      case 'water.jpg':
      case 'electric.jpg':
        setTotal((prevTotal) => prevTotal - 50);
        break;
      case 'chest3.webp':
      case 'chest2.webp':
      case 'chest.webp':
        setTotal((prevTotal) => prevTotal + 100);
        break;
      case 'cloth.jpg':
        setInvestmentMessage('¿Te encantaría comprar vestimenta?');
        setAdditionalInfo(null);
        setColorText('white');
        setBgColor('black');
        setIsInvestmentModalOpen(true);
        break;
      case 'cinema.jpg':
        setInvestmentMessage('¿Deseas entrar al Cine?');
        setAdditionalInfo(null);
        setColorText('black');
        setBgColor('white');
        setIsInvestmentModalOpen(true);
        break;
      default:
        break;
    }
  };
  