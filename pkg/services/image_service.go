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

// Delete Container 
// TODO: IF image is used by container, it should not be deleted
func (i *imageService) DeleteImage(image_name, image_id string) bool {
	container_list, err := i.docker_client.ContainerList(*i.ctx)
	if err != nil {
		return false
	}

	for _, container := range container_list {
		if container.ImageID == image_id {
			return false
		}
	}

	err = i.docker_client.ImageDeleteByName(*i.ctx, image_name)
	if err != nil {
		return false
	}

	return true
}

