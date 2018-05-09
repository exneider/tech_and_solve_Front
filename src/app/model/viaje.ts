export class Viaje {
    private cedulaUsuario: string;
    private archivo: string;

    public get _cedulaUsuario(): string {
        return this.cedulaUsuario;
    }

    public get _archivo(): string {
        return this.archivo;
    }

    public set _cedulaUsuario(cedulaUsuario: string) {
        this.cedulaUsuario = cedulaUsuario;
    }

    public set _archivo(archivo: string) {
        this.archivo = archivo;
    }
}