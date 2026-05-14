import { Zap, Shield, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Agilidade",
    description: "Serviços rápidos e eficientes para você não ficar sem seu computador.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Peças de qualidade e profissionais especializados no que fazem.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte",
    description: "Atendimento pós-serviço dedicado para garantir sua satisfação.",
  },
]

const values = [
  {
    title: "Segurança",
    description: "Seus dados protegidos",
  },
  {
    title: "Preços Justos",
    description: "Soluções acessíveis com transparência",
  },
  {
    title: "Satisfação",
    description: "Seu equipamento em boas mãos",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Compromisso <span className="text-primary">com Qualidade!</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Por que escolher a TEFÉ INFO para cuidar do seu computador?
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values Bar */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            {values.map((value, index) => (
              <div key={index}>
                <h4 className="text-lg md:text-xl font-bold text-primary mb-1">{value.title}</h4>
                <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
