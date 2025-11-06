import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Coins, Clock } from "lucide-react"

export default function HomePage() {
  const topCasinos = [
    {
      rank: 2,
      name: "CryptoWin Casino",
      bonus: "€500 + 100 Free Spins",
      coins: ["BTC", "ETH", "LTC", "USDT"],
      rating: 4.8,
      link: "/out/cryptowin.html",
    },
    {
      rank: 3,
      name: "BitPlay Casino",
      bonus: "€300 + 50 Free Spins",
      coins: ["BTC", "ETH", "USDT"],
      rating: 4.7,
      link: "/out/bitplay.html",
    },
    {
      rank: 4,
      name: "CoinGaming",
      bonus: "€400 + 75 Free Spins",
      coins: ["BTC", "ETH", "LTC"],
      rating: 4.6,
      link: "/out/coingaming.html",
    },
    {
      rank: 5,
      name: "LuckyCrypto",
      bonus: "€250 + 30 Free Spins",
      coins: ["BTC", "ETH", "USDT", "LTC"],
      rating: 4.5,
      link: "/out/luckycrypto.html",
    },
  ]

  const allCasinos = [
    {
      rank: 1,
      name: "NewLucky",
      bonus: "€1000 + 200 Free Spins",
      crypto: "BTC, ETH, LTC, USDT",
      license: "Curaçao",
      rating: 4.9,
      link: "/out/newlucky.html",
    },
    ...topCasinos.map((c) => ({ ...c, crypto: c.coins.join(", "), license: "Curaçao" })),
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins className="h-8 w-8 text-neon-cyan" />
            <span className="text-xl font-bold text-balance">Casino Zonder Cruks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-neon-cyan transition-colors">
              Home
            </a>
            <a href="#reviews" className="text-sm hover:text-neon-cyan transition-colors">
              Reviews
            </a>
            <a href="#over-ons" className="text-sm hover:text-neon-cyan transition-colors">
              Over ons
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-gold bg-clip-text text-transparent">
            Casino Zonder Cruks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Ontdek de beste crypto casino's zonder Cruks registratie. Speel anoniem, ontvang snelle uitbetalingen en
            geniet van eerlijke spellen.
          </p>

          {/* Featured Casino - NewLucky */}
          <Card className="max-w-4xl mx-auto border-neon-cyan/30 bg-card/50 backdrop-blur hover:border-neon-cyan/60 transition-all duration-300 hover:shadow-neon-cyan">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-neon-gold/20 text-neon-gold border-neon-gold/50 hover:bg-neon-gold/30">
                  #1 Aanbevolen
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-neon-gold text-neon-gold" />
                  ))}
                  <span className="ml-2 text-sm font-semibold">4.9</span>
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl text-balance">NewLucky Casino</CardTitle>
              <CardDescription className="text-lg mt-2">€1000 Welkomstbonus + 200 Free Spins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {["BTC", "ETH", "LTC", "USDT"].map((coin) => (
                  <Badge key={coin} variant="outline" className="border-neon-purple/50 text-neon-purple">
                    {coin}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                NewLucky is het beste crypto casino zonder Cruks. Geniet van snelle uitbetalingen, honderden spellen en
                uitstekende klantenservice 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-neon-cyan hover:bg-neon-cyan/90 text-background font-semibold shadow-neon-cyan-glow"
                  asChild
                >
                  <a href="/out/newlucky.html" aria-label="Speel nu bij NewLucky Casino">
                    Speel Nu
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neon-purple/50 hover:bg-neon-purple/10 bg-transparent"
                  asChild
                >
                  <a href="#reviews" aria-label="Bekijk NewLucky review">
                    Bekijk Review
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Casinos Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-balance">Top Crypto Casino's</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topCasinos.map((casino) => (
              <Card
                key={casino.rank}
                className="border-border/50 bg-card/50 backdrop-blur hover:border-neon-purple/50 transition-all duration-300 hover:shadow-neon-purple"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/50">
                      #{casino.rank}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(Math.floor(casino.rating))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-neon-gold text-neon-gold" />
                      ))}
                      <span className="ml-1 text-sm">{casino.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-balance">{casino.name}</CardTitle>
                  <CardDescription>{casino.bonus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {casino.coins.map((coin) => (
                      <Badge key={coin} variant="outline" className="border-neon-cyan/30 text-neon-cyan">
                        {coin}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-neon-purple hover:bg-neon-purple/90 text-background font-semibold"
                    asChild
                  >
                    <a href={casino.link} aria-label={`Speel nu bij ${casino.name}`}>
                      Speel Nu
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16" id="reviews">
          <h2 className="text-3xl font-bold mb-8 text-center text-balance">Casino Vergelijking</h2>
          <div className="overflow-x-auto rounded-lg border border-border/50">
            <table className="w-full">
              <thead className="bg-muted/50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Casino</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Bonus</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Crypto</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Licentie</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Rating</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Actie</th>
                </tr>
              </thead>
              <tbody>
                {allCasinos.map((casino, index) => (
                  <tr
                    key={casino.rank}
                    className={`border-t border-border/50 hover:bg-muted/30 transition-colors ${
                      index % 2 === 0 ? "bg-card/30" : "bg-card/10"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <Badge
                        variant={casino.rank === 1 ? "default" : "secondary"}
                        className={casino.rank === 1 ? "bg-neon-gold/20 text-neon-gold border-neon-gold/50" : ""}
                      >
                        #{casino.rank}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 font-semibold">{casino.name}</td>
                    <td className="px-4 py-4 text-sm">{casino.bonus}</td>
                    <td className="px-4 py-4 text-sm text-neon-cyan">{casino.crypto}</td>
                    <td className="px-4 py-4 text-sm">{casino.license}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-neon-gold text-neon-gold" />
                        <span className="text-sm font-semibold">{casino.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Button size="sm" className="bg-neon-cyan hover:bg-neon-cyan/90 text-background" asChild>
                        <a href={casino.link} aria-label={`Speel bij ${casino.name}`}>
                          Speel
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Crypto Casinos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-balance">Waarom Crypto Casino's?</h2>
          <Card className="max-w-4xl mx-auto border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                Crypto casino's zonder Cruks bieden Nederlandse spelers de vrijheid om te genieten van online gokken
                zonder beperkingen. Met cryptocurrency kun je volledig anoniem spelen, geniet je van bliksemsnelle
                uitbetalingen en heb je toegang tot eerlijke, provably fair spellen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/30 hover:border-neon-cyan/50 transition-all">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-neon-cyan" />
                  <h3 className="font-semibold mb-2 text-balance">Snelle Uitbetaling</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Ontvang je winsten binnen enkele minuten via crypto
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/30 hover:border-neon-purple/50 transition-all">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-neon-purple" />
                  <h3 className="font-semibold mb-2 text-balance">Anonimiteit</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Speel zonder persoonlijke gegevens te delen
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30 border border-border/30 hover:border-neon-gold/50 transition-all">
                  <Coins className="h-12 w-12 mx-auto mb-4 text-neon-gold" />
                  <h3 className="font-semibold mb-2 text-balance">Eerlijke Spellen</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Provably fair technologie garandeert eerlijkheid
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-lg border border-neon-cyan/30 bg-card/30 backdrop-blur">
              <Shield className="h-16 w-16 mx-auto mb-4 text-neon-cyan" />
              <h3 className="text-xl font-semibold mb-2 text-balance">100% Veilig</h3>
              <p className="text-muted-foreground text-pretty">
                Alle aanbevolen casino's zijn volledig gelicenseerd en veilig
              </p>
            </div>
            <div className="text-center p-8 rounded-lg border border-neon-purple/30 bg-card/30 backdrop-blur">
              <Coins className="h-16 w-16 mx-auto mb-4 text-neon-purple" />
              <h3 className="text-xl font-semibold mb-2 text-balance">Crypto Betalingen</h3>
              <p className="text-muted-foreground text-pretty">
                Accepteert BTC, ETH, LTC, USDT en meer cryptocurrencies
              </p>
            </div>
            <div className="text-center p-8 rounded-lg border border-neon-gold/30 bg-card/30 backdrop-blur">
              <Clock className="h-16 w-16 mx-auto mb-4 text-neon-gold" />
              <h3 className="text-xl font-semibold mb-2 text-balance">24/7 Support</h3>
              <p className="text-muted-foreground text-pretty">Klantenservice altijd beschikbaar voor al je vragen</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur mt-16" id="over-ons">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </a>
              <a href="#over-ons" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Over ons
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center text-balance">
              18+ | Speel verantwoord | Gokken kan verslavend zijn
            </p>
          </div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p className="text-pretty">
              © 2025 Casino Zonder Cruks. Alle rechten voorbehouden. Deze website bevat affiliate links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
