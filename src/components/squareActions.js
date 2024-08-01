export const handleSquareActions = (currentSquare, setTotal, setColorText, setBgColor ,setIsInvestmentModalOpen, setInvestmentMessage, setAdditionalInfo) => {
    switch (currentSquare.image) {
      case 'cf-serenity.jpg':
        setInvestmentMessage('¿Deseas invertir en Capital Fund?');
        setAdditionalInfo('Gana un 5.49% adicional sobre tu total actual.');
        setColorText('white');
        setBgColor('#0e1b4d');
        setIsInvestmentModalOpen(true);
        break;
      case 'cf-classic.jpg':
        setInvestmentMessage('¿Deseas invertir en Capital Fund?');
        setAdditionalInfo('Gana un 8.8% adicional sobre tu total actual.');
        setColorText('black');
        setBgColor('white');
        setIsInvestmentModalOpen(true);
        break;
      case 'cf-grow.jpg':
        setInvestmentMessage('¿Deseas invertir en Capital Fund?');
        setAdditionalInfo('Gana un 17.5% adicional sobre tu total actual.');
        setColorText('white');
        setBgColor('black');
        setIsInvestmentModalOpen(true);
        break;
      case 'tax.jpg':
      case 'visa.jpg':
      case 'hijos.jpg':
        setTotal((prevTotal) => prevTotal - 100);
        break;
      case 'water.jpg':
      case 'electric.jpg':
      case 'notary.jpg':
        setTotal((prevTotal) => prevTotal - 50);
        break;
      case 'chest3.webp':
      case 'chest2.webp':
      case 'chest.webp':
        setTotal((prevTotal) => prevTotal + 100);
        break;
      case 'navidad.jpg':
        setTotal((prevTotal) => prevTotal - 300);
        break;
      case 'jewelry.png':
        setTotal((prevTotal) => prevTotal * 1.02);
        break;
      case 'rent.jpg':
        setTotal((prevTotal) => prevTotal - 1000);
        break;
      case 'bd-mom.webp':
      case 'bd-son.jpg':
        setTotal((prevTotal) => prevTotal - 200);
        break;
      case 'study.jpg':
        setTotal((prevTotal) => prevTotal - 500);
        break;
      case 'alquilar.webp':
        setTotal((prevTotal) => prevTotal * 1.03);
        break;
      case 'health.jpg':
        setTotal((prevTotal) => prevTotal - 400);
        break;
      case 'bienes.jpg':
        setTotal((prevTotal) => prevTotal * 1.04);
        break;
      case 'cloth.jpg':
        setInvestmentMessage('¿Te encantaría comprar vestimenta?');
        setAdditionalInfo('');
        setColorText('white');
        setBgColor('black');
        setIsInvestmentModalOpen(true);
        break;
      case 'cinema.jpg':
        setInvestmentMessage('¿Deseas entrar al Cine?');
        setAdditionalInfo('');
        setColorText('black');
        setBgColor('white');
        setIsInvestmentModalOpen(true);
        break;
      default:
        break;
    }
  };
  