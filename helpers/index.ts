export const FormattedPrice = ( price: number) => {
    const formattedPrice = Intl.NumberFormat("fil-PH", {
      style: "currency",
      currency: "PHP"
    }).format(price);

    const updatedPrice = formattedPrice.replace("₱", "PHP ");

    return updatedPrice
  }