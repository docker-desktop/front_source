export namespace types {
	
	export class Port {
	    PrivatePort: number;
	    PublicPort?: number;
	    Type: string;
	    IP?: string;
	
	    static createFrom(source: any = {}) {
	        return new Port(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PrivatePort = source["PrivatePort"];
	        this.PublicPort = source["PublicPort"];
	        this.Type = source["Type"];
	        this.IP = source["IP"];
	    }
	}
	export class ContainerSummary {
	    Id: string;
	    Names: string[];
	    Image: string;
	    ImageID: string;
	    Command: string;
	    Created: number;
	    State: string;
	    Status: string;
	    Ports: Port[];
	    Labels: {[key: string]: string};
	    SizeRw?: number;
	    SizeRootFs?: number;
	
	    static createFrom(source: any = {}) {
	        return new ContainerSummary(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.Names = source["Names"];
	        this.Image = source["Image"];
	        this.ImageID = source["ImageID"];
	        this.Command = source["Command"];
	        this.Created = source["Created"];
	        this.State = source["State"];
	        this.Status = source["Status"];
	        this.Ports = this.convertValues(source["Ports"], Port);
	        this.Labels = source["Labels"];
	        this.SizeRw = source["SizeRw"];
	        this.SizeRootFs = source["SizeRootFs"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ImageSummary {
	    Id: string;
	    RepoTags: string[];
	    RepoDigests: string[];
	    Created: number;
	    Size: number;
	    VirtualSize: number;
	    Labels: {[key: string]: string};
	    Containers: number;
	
	    static createFrom(source: any = {}) {
	        return new ImageSummary(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.RepoTags = source["RepoTags"];
	        this.RepoDigests = source["RepoDigests"];
	        this.Created = source["Created"];
	        this.Size = source["Size"];
	        this.VirtualSize = source["VirtualSize"];
	        this.Labels = source["Labels"];
	        this.Containers = source["Containers"];
	    }
	}
	export class Info {
	    Architecture: string;
	    ClusterStore: string;
	    CgroupDriver: string;
	    Containers: number;
	    ContainersRunning: number;
	    ContainersStopped: number;
	    ContainersPaused: number;
	    CpuCfsPeriod: boolean;
	    CpuCfsQuota: boolean;
	    Debug: boolean;
	    DockerRootDir: string;
	    Driver: string;
	    DriverStatus: string[][];
	    ExperimentalBuild: boolean;
	    HttpProxy: string;
	    HttpsProxy: string;
	    ID: string;
	    IPv4Forwarding: boolean;
	    Images: number;
	    IndexServerAddress: string;
	    InitPath: string;
	    InitSha1: string;
	    KernelMemory: boolean;
	    KernelVersion: string;
	    Labels: string[];
	    MemTotal: number;
	    MemoryLimit: boolean;
	    NCPU: number;
	    NEventsListener: number;
	    NFd: number;
	    NGoroutines: number;
	    Name: string;
	    NoProxy: string;
	    OSType: string;
	    OomKillDisable: boolean;
	    OperatingSystem: string;
	    // Go type: struct { AllowNondistributableArtifactsCIDRs []string "json:\"AllowNondistributableArtifactsCIDRs\""; AllowNondistributableArtifactsHostnames []string "json:\"AllowNondistributableArtifactsHostnames\""; InsecureRegistryCIDRs []string "json:\"InsecureRegistryCIDRs\""; IndexConfigs map[string]struct { Mirrors []string "json:\"Mirrors\""; Name string "json:\"Name\""; Official bool "json:\"Official\""; Secure bool "json:\"Secure\"" } "json:\"IndexConfigs\""; Mirrors []string "json:\"Mirrors\""; NonGlobalRegistryHostnames []string "json:\"NonGlobalRegistryHostnames\""; PermissiveHostnames []string "json:\"PermissiveHostnames\"" }
	    RegistryConfig: any;
	    SecurityOptions: string[];
	    ServerVersion: string;
	    SwapLimit: boolean;
	    SystemTime: string;
	
	    static createFrom(source: any = {}) {
	        return new Info(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Architecture = source["Architecture"];
	        this.ClusterStore = source["ClusterStore"];
	        this.CgroupDriver = source["CgroupDriver"];
	        this.Containers = source["Containers"];
	        this.ContainersRunning = source["ContainersRunning"];
	        this.ContainersStopped = source["ContainersStopped"];
	        this.ContainersPaused = source["ContainersPaused"];
	        this.CpuCfsPeriod = source["CpuCfsPeriod"];
	        this.CpuCfsQuota = source["CpuCfsQuota"];
	        this.Debug = source["Debug"];
	        this.DockerRootDir = source["DockerRootDir"];
	        this.Driver = source["Driver"];
	        this.DriverStatus = source["DriverStatus"];
	        this.ExperimentalBuild = source["ExperimentalBuild"];
	        this.HttpProxy = source["HttpProxy"];
	        this.HttpsProxy = source["HttpsProxy"];
	        this.ID = source["ID"];
	        this.IPv4Forwarding = source["IPv4Forwarding"];
	        this.Images = source["Images"];
	        this.IndexServerAddress = source["IndexServerAddress"];
	        this.InitPath = source["InitPath"];
	        this.InitSha1 = source["InitSha1"];
	        this.KernelMemory = source["KernelMemory"];
	        this.KernelVersion = source["KernelVersion"];
	        this.Labels = source["Labels"];
	        this.MemTotal = source["MemTotal"];
	        this.MemoryLimit = source["MemoryLimit"];
	        this.NCPU = source["NCPU"];
	        this.NEventsListener = source["NEventsListener"];
	        this.NFd = source["NFd"];
	        this.NGoroutines = source["NGoroutines"];
	        this.Name = source["Name"];
	        this.NoProxy = source["NoProxy"];
	        this.OSType = source["OSType"];
	        this.OomKillDisable = source["OomKillDisable"];
	        this.OperatingSystem = source["OperatingSystem"];
	        this.RegistryConfig = this.convertValues(source["RegistryConfig"], Object);
	        this.SecurityOptions = source["SecurityOptions"];
	        this.ServerVersion = source["ServerVersion"];
	        this.SwapLimit = source["SwapLimit"];
	        this.SystemTime = source["SystemTime"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class VersionInfo {
	    Version: string;
	    Os: string;
	    KernelVersion: string;
	    GoVersion: string;
	    GitCommit: string;
	    Arch: string;
	    BuildTime: string;
	    ApiVersion: string;
	    Experimental: boolean;
	
	    static createFrom(source: any = {}) {
	        return new VersionInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Os = source["Os"];
	        this.KernelVersion = source["KernelVersion"];
	        this.GoVersion = source["GoVersion"];
	        this.GitCommit = source["GitCommit"];
	        this.Arch = source["Arch"];
	        this.BuildTime = source["BuildTime"];
	        this.ApiVersion = source["ApiVersion"];
	        this.Experimental = source["Experimental"];
	    }
	}

}

