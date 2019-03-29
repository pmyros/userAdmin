using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace UserAdmin.Models
{
    public partial class ngNetCoreApiDBContext : DbContext
    {
        public ngNetCoreApiDBContext()
        {
        }

        public ngNetCoreApiDBContext(DbContextOptions<ngNetCoreApiDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TarifaDevengada> TarifaDevengada { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(local)\\localhost;Database=ngNetCoreApiDB;Trusted_Connection=True;Integrated Security=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TarifaDevengada>(entity =>
            {
                entity.Property(e => e.TarifaDevengadaId).HasColumnName("TarifaDevengadaID");

                entity.Property(e => e.Cantidad).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.ComisionDetalle)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ComisionId).HasColumnName("ComisionID");

                entity.Property(e => e.ContratoDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ContratoId).HasColumnName("ContratoID");

                entity.Property(e => e.Cotizacion).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.CuentaCompensacionCodigo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaCompensacionDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaCompensacionId).HasColumnName("CuentaCompensacionID");

                entity.Property(e => e.CuentaFacturacionCodigo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaFacturacionDescripcion)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaFacturacionId).HasColumnName("CuentaFacturacionID");

                entity.Property(e => e.CuentaRegistroCodigo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaRegistroDescripcion)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CuentaRegistroId).HasColumnName("CuentaRegistroID");

                entity.Property(e => e.EjecucionDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EjecucionId).HasColumnName("EjecucionID");

                entity.Property(e => e.EntidadDescripcion)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EntidadId).HasColumnName("EntidadID");

                entity.Property(e => e.Fecha).HasColumnType("date");

                entity.Property(e => e.MiembroCompensadorCodigo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MiembroCompensadorDescripcion)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MiembroCompensadorId).HasColumnName("MiembroCompensadorID");

                entity.Property(e => e.MonedaCodigoIso)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MonedaDescripcion)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MonedaId).HasColumnName("MonedaID");

                entity.Property(e => e.OperacionCarteraId).HasColumnName("OperacionCarteraID");

                entity.Property(e => e.ProductoAlias)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductoDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductoId).HasColumnName("ProductoID");

                entity.Property(e => e.TarifaId).HasColumnName("TarifaID");

                entity.Property(e => e.TipoOrdenDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TipoOrdenId).HasColumnName("TipoOrdenID");

                entity.Property(e => e.TipoRuedaDescripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TipoRuedaId).HasColumnName("TipoRuedaID");

                entity.Property(e => e.Total).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.TotalMonedaBase).HasColumnType("decimal(18, 6)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.Property(e => e.UsuarioID).HasColumnName("UsuarioID");              

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);


                entity.Property(e => e.MC)
                    .HasMaxLength(100)
                    .IsUnicode(false);


                entity.Property(e => e.CIM)
                    .HasMaxLength(100)
                    .IsUnicode(false);


            });
        }
    }
}
