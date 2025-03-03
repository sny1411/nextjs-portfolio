variable "image" {
  type = string
}

job "portfolio" {
  datacenters = ["homelab"]
  type = "service"

  group "web" {
    count = 1

    network {
      port "app" {
        to = 3000
      }
    }

    service {
      name = "portfolio"
      port = "app"

      check {
        type     = "http"
        path     = "/"
        interval = "10s"
        timeout  = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.portfolio.rule=Host(`matteo-humez.fr`)",
        "traefik.http.routers.portfolio.entrypoints=websecure",
        "traefik.http.services.portfolio.loadbalancer.server.port=${NOMAD_PORT_app}",
        "traefik.http.routers.portfolio.tls=true"
      ]
    }

    task "portfolio" {
      driver = "docker"

      config {
        image = var.image
        ports = ["app"]

        logging {
          type = "json-file"
        }
      }

      env {
        NODE_ENV = "production"
        PORT = "3000"
      }

      resources {
        cpu    = 1000
        memory = 512
      }
    }
  }
}