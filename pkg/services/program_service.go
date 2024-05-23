package services 

import (
	"context"
	"github.com/docker-desktop/GoDockerInfoFetcher/pkg/client"
	types "github.com/docker-desktop/GoDockerInfoFetcher/pkg/type"
)

type programService struct {
	ctx           *context.Context
	docker_client client.Client
}


func NewProgramService(docker_client client.Client) *programService {
	ctx := context.Background()

	return &programService{
		ctx:           &ctx,
		docker_client: docker_client,
	}
}
