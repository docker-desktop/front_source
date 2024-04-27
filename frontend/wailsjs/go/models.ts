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

}

