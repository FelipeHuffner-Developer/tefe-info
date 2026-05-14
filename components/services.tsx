import {
  Cpu,
  Thermometer,
  HardDrive,
  ShieldCheck,
  Gauge,
  Download,
  MemoryStick,
  Wrench,
  Monitor,
  Server,
} from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Limpeza Interna",
    description: "Remoção de poeira e sujeira para melhor desempenho e refrigeração do seu equipamento.",
  },
  {
    icon: Thermometer,
    title: "Troca de Pasta Térmica",
    description: "Aplicação de pasta térmica de qualidade para evitar superaquecimento.",
  },
  {
    icon: HardDrive,
    title: "Formatação com Backup",
    description: "Formatação segura com backup completo dos seus dados importantes.",
  },
  {
    icon: ShieldCheck,
    title: "Remoção de Vírus",
    description: "Eliminação de malwares, vírus e programas indesejados do sistema.",
  },
  {
    icon: Gauge,
    title: "Otimização de Sistema",
    description: "Melhoria de desempenho e velocidade do seu computador.",
  },
  {
    icon: Download,
    title: "Instalação de Softwares",
    description: "Instalação e configuração de programas essenciais e profissionais.",
  },
  {
    icon: MemoryStick,
    title: "Upgrade de SSD e RAM",
    description: "Aumento de memória e troca para SSD para maior velocidade.",
  },
  {
    icon: Wrench,
    title: "Reparo de Carcaças",
    description: "Conserto de partes físicas danificadas do notebook ou desktop.",
  },
  {
    icon: Monitor,
    title: "Troca de Telas e Teclados",
    description: "Substituição de telas quebradas e teclados com defeito.",
  },
  {
    icon: Server,
    title: "Montagem de Computadores",
    description: "Montagem personalizada de PCs de acordo com sua necessidade.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para manter seu computador funcionando perfeitamente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{service.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
