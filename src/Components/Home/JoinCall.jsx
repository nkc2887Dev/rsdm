import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "@/config/config";
const { PHONE } = config;

const JoinCall = () => {
  return (
    <section className="py-10 bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Digital Marketing Journey?
            </h2>
            <p className="text-white/80 text-lg">
              Join RSDM today and transform your career with our
              industry-leading digital marketing program.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`tel:${PHONE}`}>
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </Link>
            <Link to={`https://wa.me/${PHONE}`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCall;
