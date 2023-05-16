import "./App.css";
import styled from "styled-components";

function App() {//Do The Slider!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <ContainerDiv>
      <Header>
        <Button>
          <img src="../src/assets/header/manubutton.png" alt="manubutton" />
        </Button>
        <LogoDiv>
          <img
            src="../src/assets/header/viveicon.svg"
            alt="viveicon"
            height="28"
          />
          <img src="../src/assets/header/vivelogo1.png" alt="vivelogo1" />
        </LogoDiv>
        <Button>
          <img src="../src/assets/header/cart.png" alt="carticon" />
        </Button>
      </Header>

      <ViveProDiv>
        <img src="../src/assets/vivepro/photoandglow.png" alt="photoandglow" />
        <ViveImg
          src="../src/assets/vivepro/htcvivepro2.png"
          alt="htcvivepro2"
        />
        <DescriptionP>
          The new kind of VR, Discover new worlds and start your journey in the
          virtual UNIVERSE
        </DescriptionP>
        <PriceDiv>$799</PriceDiv>
        <OrderButton>ORDER NOW</OrderButton>
      </ViveProDiv>
      <InfoDiv>
        <BackHeadSetImg src="../src/assets/info/backheadset.png" alt="backheadset" />
        <div>Slider</div>
      </InfoDiv>
    </ContainerDiv>
  );
}

export default App;

const ContainerDiv = styled.div`
  height: 4318px;
  background-color: black;
`;
//Info CSS
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 320px;
  height: 718px;
  left: 20px;
  top: 777px;

  background: linear-gradient(90deg, rgba(0, 235, 207, 0.45) 0%, rgba(113, 19, 170, 0.51) 46.94%);
filter: blur(150px);
`;
const BackHeadSetImg = styled.img`
position: absolute;
width: 320px;
height: 255px;
left: 0px;
top: 14px;
`;

//VivePro CSS
const ViveProDiv = styled.div`
  position: relative;
  top: -80px;
`;
const ViveImg = styled.img`
  position: relative;
  margin-left: 20px;
  top: -200px;
`;
const DescriptionP = styled.p`
  position: relative;
  top: -180px;

  width: 317px;
  height: 50px;

  margin-inline: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;
  color: #ffffff;
`;
const PriceDiv = styled.div`
  position: relative;
  width: 65px;
  height: 36px;
  left: 20px;
  top: -170px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  opacity: 0.99;
`;
const OrderButton = styled.button`
  position: absolute;
  width: 320px;
  height: 48px;
  left: 20px;
  bottom: 70px;

  background: linear-gradient(90deg, #09535d 35.73%, #3a0099 100%);
  border-radius: 5px;
  border: 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`; //VivePro CSS

//HEADER css
const Button = styled.button`
  margin-inline: 33px;
  background-color: black;
  border: 0;
`;
const Header = styled.header`
  position: fixed;
  top: 0px;
  height: 74px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 12px;
  margin-bottom: 12px;
`; //HEADER css
