import { OffValue, CheckBackground, OnValue, SwitchContainer } from "./style";

interface SwitchProps {
  onLabel: string;
  offLabel: string;
  isActive: boolean;
  setIsActive: (b: boolean) => void;
}

const Switch = ({ onLabel, offLabel, isActive, setIsActive }: SwitchProps) => {
  return (
    <SwitchContainer>
      <CheckBackground isActive={isActive}></CheckBackground>
      <OffValue onClick={() => setIsActive(false)} isActive={isActive}>
        {offLabel}
      </OffValue>
      <OnValue onClick={() => setIsActive(true)} isActive={isActive}>
        {onLabel}
      </OnValue>
    </SwitchContainer>
  );
};

export default Switch;
