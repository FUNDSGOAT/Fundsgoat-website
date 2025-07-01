export default function ConsultationForm() {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-4">Request a Consultation</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <textarea placeholder="Describe your needs" className="w-full border p-2 rounded h-32" />
        <button type="submit" className="bg-gold-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  );
}