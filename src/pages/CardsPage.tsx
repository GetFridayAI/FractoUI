import './less/cardsPage.less';
import { SimpleCard } from '../components/Cards/SimpleCard';
import { Card } from '../components';

const CardsPage = () => {
  const cardHeader = <>
    <div>Some Header</div>
  </>

  const cardBody = <>
    <div>Some description</div>
  </>

  return (
    <div className="cards-section">
      <div className="cards-container">
        <h3>Cards</h3>
        <div className="cards-wrapper">
          <SimpleCard
            title="Basic Card"
            hasShadow={true}
            isDisabled={false}
          />
          <br /><br />
          <Card
            title={"Normal Card"}
            hasShadow={true}
            cardHeader={cardHeader}
            description={cardBody}
          />
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;