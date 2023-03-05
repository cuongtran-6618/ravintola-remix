import SectionHeader from "~/components/SectionHeader";
export default function GroupsAndEventsRouter() {
  return (
    <main>
      <SectionHeader title="Groups and events" />
      <div className="container px-4 my-4">
        <div className="content-container text-center">
          <p className="mobile-block">
            The most important aspects of Vietnamese cuisine are sociality and a
            sense of community. Most of the dishes in our menu are meant to be
            shared with friends and family. Dinner at Quê Em is an experience
            filled with flavor, vibrant colors and a cozy atmosphere.
          </p>
          <p className="mobile-block">
            Our restaurant’s customer capacity is 120. You can book a segregated
            room for groups of up to 25 people for private gatherings. However,
            it is also possible to book the entire restaurant for private use.
          </p>
          <p className="mobile-block">
            With us, you will surely organize an unforgettable party! Table
            reservations for groups bigger than 8 people, please contact us by
            email at Ravintola. Welcome!
          </p>
        </div>
      </div>
    </main>
  );
}
