package services

import (
	"context"

	"github.com/docker-desktop/GoDockerInfoFetcher/pkg/client"
	types "github.com/docker-desktop/GoDockerInfoFetcher/pkg/type"
)

type imageService struct {
	ctx           *context.Context
	docker_client client.Client
}

func NewImageService(docker_client client.Client) *imageService {
	ctx := context.Background()

	return &imageService{
		ctx:           &ctx,
		docker_client: docker_client,
	}
}

// Get Image List ( docker images )
func (i *imageService) ImageList() ([]types.ImageSummary, error) {
	image_list, err := i.docker_client.ImageList(*i.ctx)
	if err != nil {
		return nil, err
	}

	return image_list, nil
}
