import { Button } from "../ui/Button";
export default function Homepage() {
  return (
    <div>

      <section id="hero" className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="Invofest Text"
            className="w-96"
          />
          <p className="text-gray-700">
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi generasi muda.
          </p>
          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="Mascot" />
        </div>
      </section>
    </div>
  );
}