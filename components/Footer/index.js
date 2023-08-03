import Link from "next/link";
export default function Footer() {
  return (
    <>
      <nav>
        <button>
          <Link href="/">Home</Link>
        </button>
        <button>
          <Link href="/TimeSlotsOverview/">Time Slots</Link>
        </button>
        <button>
          <Link href="">Booked Appointments</Link>
        </button>
      </nav>
    </>
  );
}
