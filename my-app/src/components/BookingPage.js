import Header from "./Header";
import Footer from "./footer";
import BookingForm from "./bookingForm";

const BookingPage = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  return (
    <>
      <Header />
      <main>
        <div className="booking-form">
          <BookingForm
            bookingData={bookingData}
            setBookingData={setBookingData}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            submitForm={submitForm}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
