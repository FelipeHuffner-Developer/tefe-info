import { MonitorSmartphone, Video, MessageCircle, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp e descreva o problema do seu computador.",
  },
  {
    icon: Video,
    step: "02",
    title: "Diagnóstico",
    description: "Vamos até o seu domicílio para avaliar o problema.",
  },
  {
    icon: MonitorSmartphone,
    step: "03",
    title: "Execução do Serviço",
    description: "Realizamos o reparo ou manutenção enquanto você recebe todo o acompanhamento.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Conclusão",
    description: "Serviço finalizado com garantia e suporte pós-atendimento.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Atendimento à domicílio ou online via AnyDesk.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="p-6 md:p-8 bg-secondary/50 rounded-2xl border border-border h-full">
                {/* Step Number */}
                <div className="text-5xl md:text-6xl font-black text-primary/20 mb-4">{item.step}</div>
                
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* AnyDesk Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-secondary/50 px-6 py-3 rounded-full border border-border">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-muted-foreground text-sm md:text-base">
              Atendimentos online via <span className="text-foreground font-semibold">AnyDesk</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
