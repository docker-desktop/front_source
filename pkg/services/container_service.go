package services

import (
	"context"

	"github.com/docker-desktop/GoDockerInfoFetcher/pkg/client"
	types "github.com/docker-desktop/GoDockerInfoFetcher/pkg/type"
)

type containerService struct {
	ctx           *context.Context
	docker_client client.Client
}

func NewContainerService(docker_client client.Client) *containerService {
	ctx := context.Background()

	return &containerService{
		ctx:           &ctx,
		docker_client: docker_client,
	}
}

// Get Container List ( docker ps -a )
func (c *containerService) ContainerList() ([]types.ContainerSummary, error) {
	container_list, err := c.docker_client.ContainerList(*c.ctx)
	if err != nil {
		return nil, err
	}

	return container_list, nil
}

// Start Container 
func (c *containerService) StartContainer(container_id string) error {
	err := c.docker_client.ContainerStartByID(*c.ctx, container_id)
	if err != nil {
		return err 
	}

	return nil
}

// Stop Container 
func (c *containerService) StopContainer(container_id string) error {
	err := c.docker_client.ContainerStopByID(*c.ctx, container_id)
	if err != nil {
		return err 
	}

	return nil
}

func (c *containerService) DeleteContainer(container_id string) bool {
	err := c.docker_client.ContainerDeleteByID(*c.ctx, container_id)
	if err != nil {
		return false
	}

	return true
}
