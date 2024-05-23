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

func (p *programService) DockerInfo() (types.VersionInfo, error) {
	docker_version, err := p.docker_client.GetVersion(*p.ctx)
	if err != nil {
		return types.VersionInfo{}, err
	}

	return docker_version, nil
}
