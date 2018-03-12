<template>
  <div class="terminos">
      <header>
      	<h2 >Terminos y condiciones</h2>
      </header>
 		<p>
    En cumplimiento con la Ley Federal de Protección de Datos Personales en
    Posesión de los Particulares, el Instituto Tecnológico Autónomo de México,
    con domicilio en Río Hondo 1, colonia Progreso Tizapán, Delegación Álvaro
    Obregón, Código Postal 01080, México, Distrito Federal, a través de su
    División Académica de Administración y Contaduría, hace de su conocimiento
    el siguiente:
</p>
<p>
    AVISO DE PRIVACIDAD
</p>
<p>
    Para formar parte del Programa de Prácticas Profesionales de Verano
</p>
<p>
    NOTA: TODOS LOS DATOS DEL TITULAR QUE SON VISIBLES PARA LAS EMPRESAS SE
    LIMITARÁN A EMPRESAS QUE OFREZCAN VACANTES COMPATIBLES CON EL PERFIL DEL
    TITULAR.
</p>
<p>
    1. Los datos personales que el titular ha proporcionado a la División
    Académica de Administración y Contaduría y División Académica de Ingeniería
    se utilizarán únicamente con los siguientes fines:
</p>
<p>
    a. Clave única:
</p>
<p>
    i. Para verificar la pertenencia del titular al ITAM.
</p>
<p>
    b. Nombre:
</p>
<p>
    i. Como método de identificación del titular
</p>
<p>
    ii. Para relacionar al titular con el programa de estudio que se encuentra
    cursando.
</p>
<p>
    iii. Dato visible por las empresas.
</p>
<p>
    c. Estudios del titular:
</p>
<p>
    i. Dato visible por las empresas como requisito de cada vacante.
</p>
<p>
    d. Teléfonos:
</p>
<p>
    i. Dato visible por las empresas como medio de contacto directo con el
    titular de los datos.
</p>
<p>
    e. Correo electrónico
</p>
<p>
    i. Dato visible por las empresas
</p>
<p>
    ii. Localización para notificar si hay cambios en los términos del presente
    Aviso de Privacidad.
</p>
<p>
    f. Experiencia Profesional:
</p>
<p>
    i. Dato visible por las empresas para determinar la trayectoria laboral del
    titular utilizado como parte del proceso de reclutamiento para que el
    Alumno realice sus Prácticas Profesionales en alguna de las empresas que
    participan en el Programa. .
</p>
<p>
    g. Promedio:
</p>
<p>
    i. Para determinar si el perfil del titular concuerda con la vacante en
    caso de que la empresa solicite promedio específico.
</p>
<p>
    h. Idiomas hablados y porcentaje, habilidades computacionales:
</p>
<p>
    i. Datos visibles por las empresas para determinar si el perfil del titular
    concuerda con la vacante.
</p>
<p>
    i. Áreas de interés:
</p>
<p>
    i. Para formar el perfil del titular y determinar las áreas en las que
    tiene experiencia.
</p>
<p>
    j. Información adicional:
</p>
<p>
    i. La veracidad de los datos que el titular asiente en el recuadro son
    responsabilidad del mismo y autoriza que sean transmitidos a las empresas.
</p>
<p>
    k. Estudios en Instituciones distintas al ITAM:
</p>
<p>
    i. Datos visibles por las empresas para determinar el estatus académico del
    titular y su concordancia con el perfil de la vacante.
</p>
<p>
    2. En caso de que el usuario quiera limitar el uso o divulgación de sus
    datos, deberá hacerlo del conocimiento a la División Académica de
    Administración y Contaduría y División Académica de Ingeniería a través de
    una solicitud por escrito con los datos que se especifican en el siguiente
    punto.
</p>
<p>
    3. Para acceder, rectificar o cancelar sus datos, así como oponerse al uso
    futuro de los mismos, el usuario deberá enviar una solicitud, física o
    digitalmente, a la División Académica de Administración y Contaduría
    División Académica de Ingeniería con los siguientes datos:
</p>
<p>
    a) El nombre del titular y domicilio u otro medio para comunicarle la
    respuesta a su solicitud;
</p>
<p>
    b) Los documentos que acrediten la identidad o, en su caso, la
    representación legal del titular; y
</p>
<p>
    c) La descripción clara y precisa de los datos personales respecto de los
    que se busca ejercer alguno de los derechos antes mencionados.
</p>
<p>
    De acuerdo con la Ley, el ITAM responderá las solicitudes en un término de
    20 días, prorrogables según el caso.
</p>
<p>
    4. En caso de que este AVISO DE PRIVACIDAD cambie en sus términos, la
    División Académica de Administración y Contaduría y la División Académica
    de Ingeniería se lo informará a la dirección de correo electrónico que el
    titular de los datos proporcionó al ITAM.
</p>

        <button class="w3-closebtn w3-green" @click.prevent="accept">Sí Acepto</button>
        <button class="w3-closebtn w3-red" @click.prevent="reject">No Acepto</button>
  </div>
</template>

<script>
export default {
  name: 'TerminosCondiciones',
  props: {
    accepted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    accept () {
      this.$emit('accepted', true);
    },
    reject () {
      this.$emit('accepted', false);
    }
  }
}
</script>

<style>
.terminos {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 10px;
}
p{
  margin: 0;
}
</style>
