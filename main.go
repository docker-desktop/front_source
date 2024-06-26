package main

import (
	"changeme/pkg/services"
	"embed"

	"github.com/docker-desktop/GoDockerInfoFetcher/pkg/client"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/linux"
)

var dockerSocket string = "/var/run/docker.sock"

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	docker_client := client.NewClient(dockerSocket)

	app := NewApp()
	container_service := services.NewContainerService(docker_client)
	image_service := services.NewImageService(docker_client)
	program_service := services.NewProgramService(docker_client)

	err := wails.Run(&options.App{
		Title:            "docker-desktop",
		Width:						1400,
		Height:           768,
		MinWidth:         1024,
		MinHeight:        768,
		Fullscreen:       false,
		BackgroundColour: &options.RGBA{R: 249, G: 249, B: 250, A: 255},
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Menu:   nil,
		Logger: nil,
		Bind: []interface{}{
			app,
			container_service,
			image_service,
			program_service,
		},
		Linux: &linux.Options{
			WebviewGpuPolicy: linux.WebviewGpuPolicyAlways,
			ProgramName:      "Docker Desktop",
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
