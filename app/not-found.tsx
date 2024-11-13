'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, RefreshCw } from "lucide-react"


export default function Page404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-destructive">404</CardTitle>
          <CardDescription className="text-lg">
            Oops! Page non trouvée ou en construction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            La page que vous recherchez semble avoir disparu dans le néant numérique.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Accueil
              </Link>
            </Button>

            <Button
              onClick={() => window.location.reload()}
              variant="secondary"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Actualiser
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
