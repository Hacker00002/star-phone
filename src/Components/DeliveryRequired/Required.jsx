import "./required.css";

const Required = () => {
  let arr = [
    {
      span: 1,
      description:
        "All orders are delivered within 8-24 hours depending on the type of product, our courier will contact you before arriving at the delivery address. If the number of orders increases and our couriers are late to deliver the goods, the delivery time may be increased. In this case, our operators will notify you in advance.  ",
    },
    {
      span: 2,
      description: "The delivery service operates daily from 11:00 to 21:00. ",
    },
    {
      span: 3,
      description:
        "When placing an order, the buyer chooses a convenient delivery time, but it must be at least 8 hours from the moment the order is placed.  ",
    },
    {
      span: 4,
      description:
        "If the order is placed after 17:00, delivery can be carried out the next day.  ",
    },
    {
      span: 5,
      description:
        "Delivery cost 25 000 soums. These prices are valid for delivery of the order to the entrance of your home (or office). ",
    },
    {
      span: 6,
      description: "When entering the apartment and leaving the floor:  ",
    },
    {
      span: 7,
      description:
        "All goods will be delivered to the address specified in the order. Before placing an order, make sure that the delivery address and the recipient's personal information are entered correctly.    ",
    },
    {
      span: 8,
      description:
        "After delivery of the order, the courier will wait for you for 20 minutes, if you cannot receive the order during this time, we will be forced to reschedule the delivery. In this case, the re-delivery service will be paid.    ",
    },
    {
      span: 9,
      description:
        "Delivery times are subject to change without prior notice.    ",
    },
    {
      span: 10,
      description:
        "Taking into account the possibility of force majeure, when placing an order to the region, part of the cost of the goods is charged on the basis of an advance payment.  ",
    },
    {
      span: 11,
      description:
        "The delivery service staff is not a consultant and is not familiar with the product configuration. You can ask the sales manager any questions you have about the purchased product.   ",
    },
    {
      span: 12,
      description:
        "After receiving the order, you can make payment, making sure that the goods are not damaged.   ",
    },
    {
      span: 13,
      description:
        "Upon receipt of the order, the buyer must present his personal passport or identity card to the delivery person.    ",
    },
  ];
  return (
    <div className="required__father">
      <div className="required__father">
        <h1>Delivery Requirements and Laws</h1>
      </div>
      <div className="delivery__payments">
        <h3>Payment and delivery of goods</h3>
        <div className="delivery__payments-text">
          <div className="delivery__pr">
            <p>
              Orders placed through the Asaxiy.uz website are delivered
              throughout Tashkent.
            </p>
          </div>
          <div className="delivery__text-one">
            <h2>The delivery service in Tashkent is carried out as follows:</h2>
            <div className="delivery__required-father">
              {arr.map((elem) => {
                return (
                  <div className="delivery__requireds">
                    <span>{elem.span}</span>
                    <p>{elem.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Required;
