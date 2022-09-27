import './App.css'
import TooltipText from './tooltip/TooltipText'

function App() {

  return (
    <div className="App">
      <p><TooltipText tooltip={"Texto generado"}>Lorem ipsum</TooltipText> dolor sit amet, consectetur adipiscing elit. Sed ille, ut dixi, vitiose. Scrupulum, inquam, abeunti; Duo Reges: constructio interrete. Tum mihi Piso: Quid ergo? Itaque contra est, ac dicitis; Prave, nequiter, turpiter cenabat; Tamen a proposito, inquam, aberramus. </p>

      <p>Si longus, levis dictata sunt. De quibus cupio scire quid sentias. Eam tum adesse, cum dolor omnis absit; Et ille ridens: Video, inquit, quid agas; Respondent extrema primis, media utrisque, omnia omnibus. Sed mehercule pergrata mihi oratio tua. Ratio quidem vestra sic cogit. </p>

      <p>Videsne quam sit magna dissensio? Quod quidem iam fit etiam in <TooltipText tooltip={"Soy un tooltip"}>Academia</TooltipText>. Respondeat totidem verbis. Neque solum ea communia, verum etiam paria esse dixerunt. Si quicquam extra virtutem habeatur in bonis. </p>
      
    </div>
  )
}

export default App
